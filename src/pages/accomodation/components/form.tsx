
import './form.css';

const Form = () => {
    return (
        <div className="form__container" 
        style={{
        background: '#16032E',
        backdropFilter: 'blur(1px)'}}
        >

    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" />
      <label htmlFor="floatingInput"> Name </label>
    </div>
        
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" />
      <label htmlFor="floatingInput">Email address </label>
    </div>
    
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingInput" />
      <label htmlFor="floatingInput"> Password </label>
    </div>
    
    <button type="button" className="btn btn-danger ac-btn"> Submit </button>
    </div>
)
}

export default Form;