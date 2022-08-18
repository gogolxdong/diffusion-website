
import './index.scss'

const Halo = () => {
    return <div className='halo-wrap'>
      {/* <div className='redHalo' style={{ left: '100px', top: '200px'}}></div> */}
      <div className='blueHalo' style={{ left: '100px', top: '200px'}}></div>
      <div className='blueHalo' style={{ right: '100px', bottom: '200px'}}></div>
    </div>
}
export default Halo;