import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) =>{
   const db = await initdb();
   const tx = db.transaction('jate', 'readwrite');
   const store = tx.objectStore('jate');
   const update = await store.put({id:1, content});
   return tx.done;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
   const db = await initdb();
   const tx = db.transaction('jate', 'readonly');
   const store = tx.objectStore('jate');
   const data = await store.get(1);
   return data ? data.content : null;
};

initdb();
