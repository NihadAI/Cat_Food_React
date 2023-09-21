import { render } from '../../utils/test-utils';
import DefaultScreen from '.';

describe('Smoke test', () => {
	it('should render', () => {
		const { asFragment } = render(<DefaultScreen />);

		expect(asFragment()).toMatchSnapshot();
	});
});
