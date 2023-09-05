function App() {
  const organisations = Array.from(Seed.organisations.sort((a, b) => (a.OrganisationName.localeCompare(b.OrganisationName))));

  const [showorganisationModal, setShoworganisationDetails] =  React.useState(false);
  const [organisationDetails, setorganisationDetails] =  React.useState(null);

  const Modal = ({ object: { OrganisationName,
                             OrganisationNumber                             
                            }} ) => (
  
    <div id="organisationModal" className="modal">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <table width="100%" className="details">
              <tbody>
                <tr>
                  <td align="center">
                    <h5 className="modal-title">
                      {OrganisationName}
                    </h5>
                  </td>
                  <td>
                    <button
                      onClick={() => setShoworganisationDetails(false)}
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close">
                    </button>                    
                  </td>
                </tr>
              </tbody>                               
            </table>                
          </div>

          <div className="modal-body">
            <table className="details">
              <tbody>
                <tr>
                  <td>Employess</td>
                </tr>        
              </tbody>
            </table>
          </div>
                      
          <div className="modal-footer">
          </div>
        </div>         
      </div>     
    </div>
   
  );

  const displayResults = (organisation) =>{
    return (
      <div className="form-floating">
        <table className="results">
          <tbody>
          {
          organisation &&
          organisation !== undefined ?
          organisation.map(({
                         id, 
                         OrganisationName,
                         OrganisationNumber,
                         AddressLine1,
                         AddressLine2,                         
                         AddressLine3,
                         AddressLine4,
                         Town,
                         Postcode,
                         Another
                         }) => {
            return(
              <tr key={id} className="results">
                <td className="button_Emplyees">
                   <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => {
                      
                      const OrganisionEmployees = ['fred','blogs'];

                      setorganisationDetails( {OrganisationName,
                                              OrganisationNumber                                                                                     
                                              });

                      setShoworganisationDetails(true);
                    }}>
                    Employees
                  </button>
                </td>

                <td>
                  <span className="OrganisationName">
                    {OrganisationName}                    
                  </span>
                </td>

                <td>
                  <span className="OrganisationAdress">
                    {AddressLine1 == '' ? null : AddressLine1}
                    {AddressLine2 == '' ? null : ', ' + AddressLine2}                    
                    {AddressLine3 == '' ? null : ', ' + AddressLine3}
                    {AddressLine4 == '' ? null : ', ' + AddressLine4}
                    , {Town}, {Postcode}                    
                  </span>
                </td>
              </tr>
            )
          })
          : "Nothing to do"
        }
          </tbody>
        </table>
        {showorganisationModal ? <Modal object={organisationDetails} /> : null}        
      </div> 
    );
  }

  const displayNoResults = () =>{
    return (
      <div className="container text-center noResults">
          No organisations Found
      </div>
    );
  }

  return (
      <div>
        <div className="container-fluid">
          <div className="container text-center">
            <h1>Organisations</h1>
          </div>          
        </div>
        {
          (Object.keys(organisations).length > 0)
          ? displayResults(organisations)
          : displayNoResults() 
        } 
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));