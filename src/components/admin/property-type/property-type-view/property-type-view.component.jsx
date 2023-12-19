export function PropertyView() {
  const hearders = ["ID", "PROPERTY-NAME", "PROPERTY-DESC"];

  return (
    <div>
      <table>
     <thead>
        <tr>
            {hearders.map((item)=>{
                <th>{item}</th>
            })}
        </tr>
     </thead>
      </table>
    </div>
  );
}
