const Table = ({ children }) => {
  return (
    <div className="flex w-[100%] overflow-x-auto">
      <table className="overflow-x-auto w-[100%] border-collapse">
        {children}
      </table>
    </div>
  );
};

function TableHead({ children }) {
  return (
    <thead className="bg-[#F4F4F4] text-[0.875em] text-black font-[600] h-[3.125rem] min-w-[62.5rem] rounded-[9.06rem]">
      {children}
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody className="text-center">{children}</tbody>;
}

function Tr({ children, ...rest }) {
  return (
    <tr className="" {...rest}>
      {children}
    </tr>
  );
}

function Td({ children, className = "" }) {
  return (
    <td
      className={`text-[0.875em] font-[400]  text-left text-black pt-[2rem] ${className}`}
    >
      {children}
    </td>
  );
}

function Th({ children, className = "" }) {
  return <th className={`text-left ${className}`}>{children}</th>;
}

Table.Td = Td;
Table.Tr = Tr;
Table.Th = Th;
Table.Thead = TableHead;
Table.TBody = TableBody;

export default Table;
