interface Id { id: string }
// interface Author { author: string }
// interface Title { title: String }
// interface PublicationDate { publicationDate: string }
// type Id = { id: string };
type Author = { author: string };
type Title = { title: string };
type PublicationDate = { publicationDate: string };
interface EditableFields extends Author, Title, PublicationDate{}
interface Book extends EditableFields, Id {}