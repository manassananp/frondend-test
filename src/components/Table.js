import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { classNames } from "primereact/utils";
import { BlockUI } from "primereact/blockui";
import { ProgressSpinner } from "primereact/progressspinner";

export default function TableComponent() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setSales([
        {
          product: "Bamboo Watch",
          lastYearSale: 51,
          thisYearSale: 40,
          lastYearProfit: 54406,
          thisYearProfit: 43342,
        },
        {
          product: "Black Watch",
          lastYearSale: 83,
          thisYearSale: 9,
          lastYearProfit: 423132,
          thisYearProfit: 312122,
        },
        {
          product: "Blue Band",
          lastYearSale: 38,
          thisYearSale: 5,
          lastYearProfit: 12321,
          thisYearProfit: 8500,
        },
        {
          product: "Blue T-Shirt",
          lastYearSale: 49,
          thisYearSale: 22,
          lastYearProfit: 745232,
          thisYearProfit: 65323,
        },
        {
          product: "Brown Purse",
          lastYearSale: 17,
          thisYearSale: 79,
          lastYearProfit: 643242,
          thisYearProfit: 500332,
        },
        {
          product: "Chakra Bracelet",
          lastYearSale: 52,
          thisYearSale: 65,
          lastYearProfit: 421132,
          thisYearProfit: 150005,
        },
        {
          product: "Galaxy Earrings",
          lastYearSale: 82,
          thisYearSale: 12,
          lastYearProfit: 131211,
          thisYearProfit: 100214,
        },
        {
          product: "Game Controller",
          lastYearSale: 44,
          thisYearSale: 45,
          lastYearProfit: 66442,
          thisYearProfit: 53322,
        },
        {
          product: "Gaming Set",
          lastYearSale: 90,
          thisYearSale: 56,
          lastYearProfit: 765442,
          thisYearProfit: 296232,
        },
        {
          product: "Gold Phone Case",
          lastYearSale: 75,
          thisYearSale: 54,
          lastYearProfit: 21212,
          thisYearProfit: 12533,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // const stockClassName =(rowData)=> classNames(
  //   "border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",
  //   {
  //     "bg-red-100 text-red-900": rowData < 50,
  //     "bg-teal-100 text-teal-900": rowData >= 50,
  //   }
  //   return <div className={stockClassName}>{rowData.lastYearSale}%</div>;
  // );

  const lastYearSaleBodyTemplate = (rowData) => {
    const stockClassName = classNames(
      "border-circle w-3rem h-3rem inline-flex font-bold justify-content-center align-items-center text-sm",
      {
        "bg-red-100 text-red-900": rowData.lastYearSale < 50,
        "bg-teal-100 text-teal-900": rowData.lastYearSale >= 50,
      }
    );

    return <div className={stockClassName}>{rowData.lastYearSale}%</div>;
    // return `${rowData.lastYearSale}%`;
  };

  const thisYearSaleBodyTemplate = (rowData) => {
    const stockClassName = classNames(
      "border-circle w-3rem h-3rem inline-flex font-bold justify-content-center align-items-center text-sm",
      {
        "bg-red-100 text-red-900": rowData.thisYearSale < 50,
        "bg-teal-100 text-teal-900": rowData.thisYearSale >= 50,
      }
    );
    return <div className={stockClassName}>{rowData.thisYearSale}%</div>;
    // return `${rowData.thisYearSale}%`;
  };

  const lastYearProfitBodyTemplate = (rowData) => {
    return `${formatCurrency(rowData.lastYearProfit)}`;
  };

  const thisYearProfitBodyTemplate = (rowData) => {
    return `${formatCurrency(rowData.thisYearProfit)}`;
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const lastYearTotal = () => {
    let total = 0;

    for (let sale of sales) {
      total += sale.lastYearProfit;
    }

    return formatCurrency(total);
  };

  const thisYearTotal = () => {
    let total = 0;

    for (let sale of sales) {
      total += sale.thisYearProfit;
    }

    return formatCurrency(total);
  };

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Product" rowSpan={3} alignHeader="center" />
        <Column header="Sale Rate" colSpan={4} alignHeader="center" />
      </Row>
      <Row>
        <Column header="Sales" colSpan={2} alignHeader="center" />
        <Column header="Profits" colSpan={2} alignHeader="center" />
      </Row>
      <Row>
        <Column header="Last Year" sortable field="lastYearSale" />
        <Column header="This Year" sortable field="thisYearSale" />
        <Column header="Last Year" sortable field="lastYearProfit" />
        <Column header="This Year" sortable field="thisYearProfit" />
      </Row>
    </ColumnGroup>
  );

  const footerGroup = (
    <ColumnGroup>
      <Row>
        <Column
          footer="Totals:"
          colSpan={3}
          footerStyle={{ textAlign: "right" }}
        />
        <Column footer={lastYearTotal} />
        <Column footer={thisYearTotal} />
      </Row>
    </ColumnGroup>
  );

  if (isLoading) {
    return (
      <div className="card flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="card">
      <DataTable
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10]}
        value={sales}
        headerColumnGroup={headerGroup}
        footerColumnGroup={footerGroup}
        tableStyle={{ minWidth: "50rem" }}
        resizableColumns
      >
        <Column text-center field="product" />
        <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
        <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
        <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
        <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
      </DataTable>
      <BlockUI blocked={isLoading} fullScreen></BlockUI>
    </div>
  );
}
