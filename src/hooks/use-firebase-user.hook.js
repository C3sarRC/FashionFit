import {useState, useEffect} from 'react';
import {auth} from 'utils/firebase.utils';

const useFireBaseUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => {
      unsuscribeFromAuth();
    }
  });
  return user;
};

export default useFireBaseUser;