import {gql} from '@apollo/client';

const COUNT_STUDENTS = gql`
{
    phd: pcategory(id: 3){
      people{
        id
      }
    }
    masters: pcategory(id: 4){
      people{
        id
      }
    }
    alumni: pcategory(id: 8){
      people{
        id
      }
    }
}
`

export default COUNT_STUDENTS