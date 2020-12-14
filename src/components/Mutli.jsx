
import { useTranslation } from 'react-i18next';

const Multi = ()=> {

  const { t,i18n } = useTranslation()


  // change lang
  const changeLang = (lang)=>{
    i18n.changeLanguage(lang)

}
  return (
    <div>
      <h1>{t('hello')}</h1>
      <p>
        <button onClick={()=>changeLang('en')}>en</button>
        <button  onClick={()=>changeLang('fr')}>fr</button>
      </p>
    </div>
    
  );
}

export default Multi;
