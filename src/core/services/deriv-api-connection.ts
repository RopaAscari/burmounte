//@ts-ignore
import DerivAPI from "@deriv/deriv-api/dist/DerivAPI";

//(global as any).WebSocket = require("ws");

const lang = process.env.NEXT_PUBLIC_DERIV_LANGUAGE!;
const endpoint = process.env.NEXT_PUBLIC_DERIV_ENDPOINT!;
const app_id = parseInt(process.env.NEXT_PUBLIC_DERIV_APP_ID!);

class DerivAPIConnector {
  private api!: DerivAPI;
  private isConnectionEstablished: boolean = false;
  private static instance: DerivAPIConnector | null = null;

  private constructor() {}

  public async connect(): Promise<void> {
    if (this.isConnectionEstablished) {
      //throw new Error("A connection is already established to the Deriv Websocket Server");
    }
    this.api = new DerivAPI({ app_id, endpoint, lang });

    this.setupEventListeners();
  }

  public static getInstance(): DerivAPIConnector {
    if (!DerivAPIConnector.instance) {
      DerivAPIConnector.instance = new DerivAPIConnector();
    }
    return DerivAPIConnector.instance;
  }

  public async waitForConnection(): Promise<void> {
    if (!this.isConnectionEstablished) {
      // Wait for the connection to be established before resolving the promise
      await new Promise((resolve) => {
        const checkConnection = () => {
          if (this.isConnectionEstablished) {
            resolve(true);
          } else {
            // Check again after a short delay
            setTimeout(checkConnection, 100);
          }
        };
        // Start checking the connection status
        checkConnection();
      });
    }
  }

  private setupEventListeners() {
    this.api.basic.connection.addEventListener("open", async () => {
      this.isConnectionEstablished = true;
      console.log("Successfully connected to Deriv's Websocket Server");
    });

    // Add an event listener for the 'close' event
    this.api.basic.connection.addEventListener("close", (event: any) => {
      if (event.wasClean) {
        console.log(`Deriv connection closed cleanly, code: ${event.code}, reason: ${event.reason}`);
      } else {
        console.error(`Deriv connection died unexpectedly. Reconnecting...`);
        // Attempt to reconnect
        this.reconnect();
      }
      this.isConnectionEstablished = false;
    });

    // Add an event listener for the 'error' event
    this.api.basic.connection.addEventListener("error", (error: any) => {
      console.error("Deriv connection error:", error);
      this.isConnectionEstablished = false;
      // Attempt to reconnect
      this.reconnect();
    });
  }

  private async reconnect() {
    // Attempt to reconnect with a delay
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Adjust the delay as needed
    this.connect()
      .then(() => {
        console.log("Attempting to reconnect to Deriv's Websocket Server");
      })
      .catch((error) => {
        console.error("Reconnection failed:", error);
        // Retry reconnection if needed
        this.reconnect();
      });
  }

  public getAPI(): DerivAPI {
    return this.api;
  }
}

export const derivAPI = DerivAPIConnector.getInstance();
