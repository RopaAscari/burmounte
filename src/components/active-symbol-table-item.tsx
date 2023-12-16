import { ActiveSymbol } from "@/core/types";
import Image from "next/image";
import ActiveSymbolChart from "./active-symbol-chart";

interface CustomersTableItemProps {
  activeSymbol: ActiveSymbol;
}

export default function ActiveSymbolTableItem({ activeSymbol }: CustomersTableItemProps) {
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-5 whitespace-nowrap w-px">
        <div className="flex items-center relative">
          <button>
            <svg className={`w-4 h-4 shrink-0 fill-current text-slate-300 dark:text-slate-600`} viewBox="0 0 16 16">
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-slate-600 dark:text-slate-100">{activeSymbol.displayName}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left text-slate-600">{activeSymbol.readableName}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left text-emerald-600">{activeSymbol?.spot}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center text-slate-600">{activeSymbol.pip}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-center flex justify-center">
        <ActiveSymbolChart />
      </td>
    </tr>
  );
}
