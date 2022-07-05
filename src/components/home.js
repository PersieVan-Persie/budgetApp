
import AddItem from '../components/additem';
import DisplayTransaction from '../components/DisplayTransaction';
function Home(props){

    return (

        <div>
            <DisplayTransaction list={props.list}/>
            <AddItem add={props.add}/>

        </div>
    )
}
export default Home;