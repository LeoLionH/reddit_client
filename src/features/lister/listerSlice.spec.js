import listerReducer, { isLoading } from './listerSlice';


describe("Test lister reducer", () => {
    const initialState = {
        redditData: {
            meta: {},
            data: []
        },
        isLoading: false,
        hasFailed: false
    };
    it('should handle initial state', () => {
        const input = listerReducer(undefined, { type: 'unknown' });
        const output = initialState
        expect(input).toEqual(output);
    });
    it('should handle loading', () => {
        const input = listerReducer(initialState, isLoading());
        const output = true;
        expect(input.isLoading).toEqual(output);
    });
});

