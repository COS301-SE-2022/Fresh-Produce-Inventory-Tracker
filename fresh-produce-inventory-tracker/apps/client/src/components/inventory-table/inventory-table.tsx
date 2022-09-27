/* eslint-disable-next-line */
export interface InventoryTableProps {
  data:any,
  page:string
}

interface InventoryItem {
  id: number;
  ProduceType:string;
  name: string;
  lastRestock: string;
  produceStatus: string;
  expireDate: string;
}

export function InventoryTable(props: InventoryTableProps) {
  if(props.page != "home")
  {
    return (
      <div className="w-full ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center text-primary/50">
                <th>#ID</th>
                <th>ProduceType</th>
                <th>Name</th>
                <th>Imported Day</th>
                <th>Expiry Date Day</th>
                <th>produceStatus</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(
                ({ id,ProduceType, name, expireDate, produceStatus, lastRestock }) => {
                  return (
                    <tr key={id} className="text-sm text-center">
                      <th>{id}</th>
                      <td>{ProduceType}</td>
                      <td>{name}</td>
                      <td>{lastRestock}</td>
                      <td>{expireDate}</td>
                      <td className="flex justify-center">
                        <span
                          className={`py-2 px-4 rounded-full ${
                            produceStatus === 'good'
                              ? 'bg-success/20 text-green-800'
                              : produceStatus === 'about to expire'
                              ? 'bg-warning/20 text-orange-700'
                              : produceStatus === 'expired'
                              ? 'bg-error/20 text-rose-700'
                              : ''
                          }`}
                        >
                          {produceStatus}
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
  else
  {
    return (
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table w-half">
            <thead>
              <tr className="text-center text-primary/50">
                <th>#ID</th>
                <th>Name</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(
                ({ id,name,produceStatus}) => {
                  return (
                    <tr key={id} className="text-sm text-center">
                      <th>{id}</th>
                      <td>{name}</td>
                      <td className="flex justify-center">
                        <span
                          className={`py-2 px-4 rounded-full ${
                            produceStatus === 'good'
                              ? 'bg-success/20 text-green-800'
                              : produceStatus === 'about to expire'
                              ? 'bg-warning/20 text-orange-700'
                              : produceStatus === 'expired'
                              ? 'bg-error/20 text-rose-700'
                              : ''
                          }`}
                        >
                          {produceStatus}
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
}

export default InventoryTable;
