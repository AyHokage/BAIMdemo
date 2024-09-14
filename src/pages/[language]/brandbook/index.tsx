import BrandBook from '@/components/BrandBook/BrandBook'
import PositionRelative from '@/components/PositionRelativeLayout/PositionRelativeLayout'
import DownloadButton from '@/components/Download/Download'
import { Provider } from 'react-redux'
import { store } from '@/services/store'

const BrandBookPage = () => {
  return (
    <Provider store={store}>
      <PositionRelative>
        <BrandBook />
      </PositionRelative>
    </Provider>
  )
}

export default BrandBookPage