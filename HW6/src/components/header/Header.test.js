import { render } from '../../utils/test-utils';
import Header from '.';

describe('Smoke test', () => {
	it('should render', () => {
		const { asFragment } = render(<Header />);

		expect(asFragment()).toMatchSnapshot();
	});
});
