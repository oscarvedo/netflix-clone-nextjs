import { useCallback, useState } from 'react';
import Input from '@/components/Input';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === 'login' ? 'register' : 'login'));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full sm:bg-opacity-50">
        <nav className="px-9 py-9">
          <img src="/images/logo.png" alt="Logo" className="h-11 mb-3" />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 sm:px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md md:w-3/5 w-full rounded-md">
              <h2 className="text-white text-3xl mb-8 font-semibold capitalize">
                {variant}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === 'register' && (
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label="Username"
                    type="text"
                  />
                )}
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  type="email"
                />
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                />
              </div>

              <button className="bg-[#e50914] py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition font-bold capitalize">
                {variant}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant === 'login'
                  ? 'First time using Netflix?'
                  : 'Already have an account?'}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-[5px] hover:underline cursor-pointer"
                >
                  {variant === 'login' ? 'Sign up now' : 'Login now'}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Login;
