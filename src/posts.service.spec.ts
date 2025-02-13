import { PostsService } from './posts.service';

describe('PostsService', () => {
	let postsService: PostsService;

	beforeEach(() => {
		postsService = new PostsService();
	});

	describe('.findMany', () => {
		const posts = [
			{ text: 'Post 1' },
			{ text: 'Post 2' },
			{ text: 'Post 3' },
			{ text: 'Post 4' },
		];

		beforeEach(() => {
			posts.forEach((post) => postsService.create(post));
		});

		it('should return all posts if called without options', () => {
			const result = postsService.findMany();
			expect(result).toEqual(posts);
		});

		it('should return correct posts for skip and limit options', () => {
			const result = postsService.findMany({ skip: 1, limit: 2 });
			expect(result).toEqual([posts[1], posts[2]]);
		});

		

	});
});
