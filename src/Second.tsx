import { useEffect } from 'react';
import JsonTable from './Components/JsonTable';
import MainComponent from './Components/MainComponent';
import { useNavigate } from 'react-router-dom';
function Second() {
  const navigation = useNavigate();
  useEffect(() => {
    const form = localStorage.getItem('form');
    if (!form) {
      navigation('/?login=false');
    }
  });
  return (
    <>
      <JsonTable />
      <MainComponent />
    </>
  );
}

export default Second;
