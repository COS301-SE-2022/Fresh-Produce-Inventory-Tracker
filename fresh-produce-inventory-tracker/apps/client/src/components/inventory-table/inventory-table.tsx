/* eslint-disable-next-line */
export interface InventoryTableProps {}

interface InventoryItem {
  id: number;
  name: string;
  description: string;
  importDay: string;
  condition: string;
  expiresIn: string;
}

const INVENTORY_TABLE_DATA_MOCK: InventoryItem[] = [
  {
    id: 10,
    name: 'Bell paper',
    description: '10 Kgs of Bell papers',
    importDay: 'Mar 13, 2022 at 10:01',
    condition: 'good',
    expiresIn: 'Apr 13, 2022',
  },
  {
    id: 13,
    name: 'Blue Berries',
    description: '8 Kgs of Blue berries',
    importDay: 'Mar 10, 2022 at 17:21',
    condition: 'about to expire',
    expiresIn: 'Mar 18, 2022',
  },
  {
    id: 22,
    name: 'Rice',
    description: '50 Kgs of Rice',
    importDay: 'Mar 01, 2022 at 09:11',
    condition: 'good',
    expiresIn: 'Mar 10, 2022',
  },
  {
    id: 12,
    name: 'Mangoes',
    description: '32 Kgs of Mangoes',
    importDay: 'Feb 23, 2022 at 12:32',
    condition: 'expired',
    expiresIn: 'Apr 22, 2022',
  },
  {
    id: 52,
    name: 'Pork',
    description: '12 Kgs of pork',
    importDay: 'Mar 14, 2022 at 10:01',
    condition: 'good',
    expiresIn: 'Apr 01, 2022',
  },
];

export function InventoryTable(props: InventoryTableProps) {
  return (
    <div className="w-full ">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center text-primary/50">
              <th>#ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Imported Day</th>
              <th>Expiry Date Day</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {INVENTORY_TABLE_DATA_MOCK.map(
              ({ id, name, description, expiresIn, condition, importDay }) => {
                return (
                  <tr key={id} className="text-sm text-center">
                    <th>{id}</th>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{importDay}</td>
                    <td>{expiresIn}</td>
                    <td className="flex justify-center">
                      <span
                        className={`py-2 px-4 rounded-full ${
                          condition === 'good'
                            ? 'bg-success/20 text-green-800'
                            : condition === 'about to expire'
                            ? 'bg-warning/20 text-orange-700'
                            : condition === 'expired'
                            ? 'bg-error/20 text-rose-700'
                            : ''
                        }`}
                      >
                        {condition}
                      </span>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;
