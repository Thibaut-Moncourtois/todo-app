-- SQLite
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(150),
    content TEXT,
    is_completed BOOLEAN DEFAULT 0
);