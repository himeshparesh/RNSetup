export const createNewTable = `
    CREATE TABLE IF NOT EXISTS User (
        id INTEGER DEFAULT 1,
        name TEXT,
        age INTEGER,
        PRIMARY KEY(id)
    )
  `;

export const getTablesList =
  "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'";

export const insertNewData = `
   INSERT INTO User (name, age)
   VALUES (?, ?)
 `;

export const updateUserData = `
    UPDATE User
    SET name = ?, age = ?
    WHERE id = ?
  `;

export const deleteUser = `
    DELETE FROM User
    WHERE id = ?
  `;
