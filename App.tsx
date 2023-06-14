import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Lato-300': require('./src/assets/fonts/Lato-Light.ttf'),
    'Lato-400': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-700': require('./src/assets/fonts/Lato-Bold.ttf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <Main />
      <StatusBar style="dark" backgroundColor="#FEF6E6" />
    </>
  );
}
