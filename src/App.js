import './App.css';
import LineChart from './components/LineChart';
import Numbers from './components/Numbers';
import CycleTime from './components/CycleTime';
import Milestone from './components/Milestone';
import AreaOfConcern from './components/AreaOfConcern';




function App() {

    return (
        <div>
            <Numbers />
            <CycleTime />
            <LineChart />
            <Milestone />
            <AreaOfConcern />
        </div>
    );
}

export default App;
