import PageLayout from "../../shared/layouts/PageLayout";
import { useNavigate } from 'react-router-dom';

const Registration = () =>{
  const navigate = useNavigate();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Валідація полів

    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    
    // Перевірка валідності email
 
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    // Перевірка валідності телефону
    const phoneRegex = /^\+?[1-9]\d{1,13}$/;
    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number format');
      return;
    }

    // Перевірка валідності пароля
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password does not meet requirements');
      return;
    }

    // Перевірка, чи паролі співпадають
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email, phone, password }));
    navigate('/');
  };


  return (
    <PageLayout name={'Registration'} href={'/registration'}>
      <div style={{ margin: '150px', textAlign: 'center' }}>
        <h1>Registration</h1>
      
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" pattern={emailRegex.toString()}  required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" pattern="^\+?[1-9]\d{1,13}$" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" required />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </PageLayout>
  )
};


export default Registration;
