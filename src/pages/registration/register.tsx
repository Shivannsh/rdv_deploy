import  { useState, ChangeEvent, FormEvent } from 'react';
import './register.css';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      captcha: '',
    });
  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // handle form submission logic 
    };

  return (
    <>
    <div className="register-container">
        <div className="title-container">
            <div className="title">Register</div>
        </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Captcha</label>
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            required
          />
          {/* Add captcha component here */}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default Register;

