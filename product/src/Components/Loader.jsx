import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

export default () => {
    return <div className="flex items-center justify-center min-w-full h-screen border-4">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <FontAwesomeIcon icon={faSpinner} spin={true}/>
            <div className="text-xl font-bold">Loading ...</div>
        </div>
    </div>
}