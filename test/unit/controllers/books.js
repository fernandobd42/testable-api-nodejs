import BooksController from '../../../controllers/books';
import HttpStatus from 'http-status';

describe('controllers books', () => {
  describe('Get all books: getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06f23:55:36.692Z',
        updated_at: '2016-08-06f23:55:36.692Z',
      }];

      td.when(Books.findAll({})).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getAll()
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Get a book: getOne()', () => {
    it('should return a book', () => {
      const Books = {
        findOne: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06f23:55:36.692Z',
        updated_at: '2016-08-06f23:55:36.692Z',
      }];

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getOne({ id: 1 })
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Create a book: create()', () => {
    it('should create a book', () => {
      const Books = {
        create: td.function(),
      };

      const book = {
        name: 'Test Book',
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06f23:55:36.692Z',
        updated_at: '2016-08-06f23:55:36.692Z',
      }];

      td.when(Books.create({ book })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.create({ book })
            .then((response) => {
              expect(response.statusCode).to.be.eql(HttpStatus.CREATED);
              expect(response.data).to.be.eql(expectedResponse);
            });
    });
  });

  describe('Update a book: create()', () => {
    it('should update a book', () => {
      const Books = {
        update: td.function(),
      };

      const book = {
        name: 'Test Book Updated',
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book Updated',
        created_at: '2016-08-06f23:55:36.692Z',
        updated_at: '2016-08-06f23:55:36.692Z',
      }];

      td.when(Books.update(book, { where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.update(book, { id: 1 })
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Delete a book: delete()', () => {
    it('should delete a book', () => {
      const Books = {
        destroy: td.function(),
      };

      td.when(Books.destroy({ where: { id: 1 } })).thenResolve();

      const booksController = new BooksController(Books);
      return booksController.delete({ id: 1 })
            .then(response => expect(response.statusCode).to.be.eql(HttpStatus.NO_CONTENT));
    });
  });
});
