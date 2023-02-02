import en from '../../static/assets/data/en.json';
import fr from '../../static/assets/data/fr.json';
import es from '../../static/assets/data/es.json';

const DilService = {


      getMainPage(dil){

    // let servis_url = window.location.origin;
    let data = en
        if(dil == 'fr') {
          data = fr
        }
        if(dil == 'es') {
          data =  es
    }
        return  data

      },

}

export default DilService;
