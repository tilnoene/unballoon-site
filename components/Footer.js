import Image from 'next/image'
import unb_logo from '../assets/images/unb_logo.png';

const Footer = ({ fullWidth }) => {
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © UnBalloon
          </p>
          <Image src={unb_logo} alt='Universidade de Brasília' style={{width: '28%', height: '50%'}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
