import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LangPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the /RU page when accessing the root URL
    router.replace('/RU');
  }, []); // Make sure the effect runs only once on component mount
 
  return null; // This component doesn't render anything, it just handles the redirection
};

export default LangPage;
