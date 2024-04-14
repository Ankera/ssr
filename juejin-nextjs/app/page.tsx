import Image from 'next/image'
import { SubmitButton } from './submit-button';
import LocalImage from '@/components/Image';

// https://www.cnblogs.com/hlkawa/p/16712927.html


export default async function Home() {
  return (
    <div>
         <picture>

          <LocalImage 
            alt='lazy'
            src="https://img.vevorstatic.com/us%2FZDHYBXSSTCHSXALL9V0%2Fgoods_img-v1%2Ffolding-wagon-cart-m100-1.2.jpg?timestamp=1708396387000" />
        </picture>

       {/* <Image
          src="https://img.vevorstatic.com/us%2FZDHYBXSSTCHSXALL9V0%2Fgoods_img-v1%2Ffolding-wagon-cart-m100-1.2.jpg?timestamp=1708396387000"
          width={500}
          height={500}
          alt="Picture of the author"
        /> */}
      <form>

        <div>{process.env.DB_HOST}</div>
        <div>{process.env.DB_USER}</div>
        <div>{process.env.CLICK_SECRET_KEY}</div>
        <div>{process.env.NEXT_PUBLIC_ROOT}</div>
        <div>{process.env.NEXT_PUBLIC_API_URL}</div>
        <><input type="text" name="field-name" /><SubmitButton /></>
      </form>
    </div>
  )
}