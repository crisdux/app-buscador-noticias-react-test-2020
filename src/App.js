import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListarNoticias from './components/ListarNoticias'
function App() {

  const [categoria, setCategoria] = useState('');
  const [pais, setPais] = useState('fr');
  const [data, setData] = useState([]);

  useEffect(()=> {
    const consultarAPI = async () => {
      const API_KEY = `d10f78f5d98d4818a23854dd031e1c87`;
      // const pais = `fr`;
      const url = `http://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${API_KEY}`;
      const data = await axios.get(url);
      setData(data.data.articles);
    }

    consultarAPI();

  }, [categoria,pais]);
  return (
    <div className="container-fluid">
      <Header titulo="App de noticias con React"/>
      <Formulario setCategoria={setCategoria} setPais={setPais}/>
      <ListarNoticias data={data}/>
    </div>
  );
}

export default App;
