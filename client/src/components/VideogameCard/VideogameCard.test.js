import VideogameCard from './VideogameCard';
import Adapter from 'enzyme-adapter-react-15';

import { shallow } from 'enzyme';


describe('Tests VideogameCard', () => {

	it('Deberia renderizarse sin Error', () => {

		const wrapper = shallow(<VideogameCard />)

		expect(wrapper).toHaveLength(1);

	})

})