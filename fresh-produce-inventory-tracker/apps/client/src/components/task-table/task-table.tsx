/* eslint-disable-next-line */
export interface TaskTableProps {
  data:any
}

export function taskTable(props: TaskTableProps) {
    return (
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center text-white ">
                <th className="bg-primary/90">#ID</th>
                <th className="bg-primary/90">Item</th>
                <th className="bg-primary/90">State</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(
                ({ id,produceType,taskType}) => {
                  return (
                    <tr key={id} className="text-sm text-center">
                      <th>{id}</th>
                      <td>{produceType}</td>
                      <td className="flex justify-center">
                        <span
                          className={`py-2 px-4 rounded-full ${
                            taskType === 'low'
                              ? 'bg-success/20 text-green-700'
                              : taskType === 'expire'
                              ? 'bg-error/20 text-rose-700'
                              : ''
                          }`}
                        >
                          {taskType}
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

export default taskTable;
