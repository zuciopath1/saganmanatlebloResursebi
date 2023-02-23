import books from './Books.json' assert {type: 'json'};
import lessons from './lessons.json' assert {type: 'json'};
import { ShowBooks, ShowAboutProject, ShowTavfurceli } from "./function.js";

ShowBooks(books);
window.ShowAboutProject = ShowAboutProject;
window.ShowTavfurceli = ShowTavfurceli;