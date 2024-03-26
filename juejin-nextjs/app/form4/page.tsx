import { title } from 'process';
import { findToDos } from './actions';
import Form from './form';

function fn(){
  return new Promise((resolve) => {
    resolve({
      list: [
        {
          label: '湖北',
          value: 'hb'
        },
        {
          label: '浙江',
          value: 'zj'
        }
      ]
    })
  })
}

export async function generateMetadata(props: any, parent: any) {
  // console.log('props.params', props)
  const data = await fn();
  console.log('========', data)
  return {
    title: 'yy',
    // data,
  }
}

export default async function Page(props: any) {
  console.log('props.params=======', props)
  const todos = await findToDos();
  return (
    <Form todos={todos} />
  )
}
