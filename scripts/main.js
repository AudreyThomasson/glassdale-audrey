console.log("Welcome to the main module")

// import { officerList } from './officers/OfficerList.js';
import { criminalList } from './criminals/CriminalList.js';
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import { NoteForm } from './notes/NoteForm.js';
import { noteList } from './notes/NoteList.js';
import { WitnessList } from './witness/WitnessList.js';

// officerList();
criminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
noteList();
WitnessList();