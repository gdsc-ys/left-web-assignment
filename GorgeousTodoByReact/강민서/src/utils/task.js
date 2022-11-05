import { TASK_STORAGE_NAME } from "../data/constants";

/**
 * Get categories with tasks
 * @returns {Category[]} Categories
 */
export const getCategories = () => {
  const rawCategories = localStorage.getItem(TASK_STORAGE_NAME);

  return JSON.parse(rawCategories || "[]");
};

/**
 * Add category
 * @param {Category[]} originalCategories Original categories
 * @returns {Category[]} New categories
 */
export const addCategory = (originalCategories) => {
  const newId = originalCategories.length;

  const newCategories = [
    ...originalCategories,
    { id: newId, name: "New Category", tasks: [] },
  ];

  return newCategories;
};

/**
 * Remove category
 * @param {Category[]} originalCategories Original categories
 * @param {number} categoryId Category id to be removed
 * @returns {Category[]} New categories
 */
export const removeCategory = (originalCategories, categoryId) => {
  const newCategories = originalCategories.filter(
    (category) => category.id !== categoryId
  );

  return newCategories;
};

/**
 * Rename category
 * @param {Category[]} originalCategories Original categories
 * @param {number} categoryId Category id
 * @param {string} categoryName New category name
 * @returns {Category[]} New categories
 */
export const renameCategory = (
  originalCategories,
  categoryId,
  categoryName
) => {
  const newCategories = originalCategories.map((category) => {
    if (category.id === categoryId) {
      return {
        id: category.id,
        name: categoryName,
        color: category.color,
        tasks: category.tasks,
      };
    }

    return category;
  });

  return newCategories;
};

/**
 * Add task
 * @param {Category[]} originalCategories Original categories
 * @param {number} categoryId Category where task will be added
 * @param {string} taskName Task name
 * @returns {Category[]} New categories
 */
export const addTask = (originalCategories, categoryId, taskName) => {
  const newCategories = originalCategories.map((category) => {
    if (category.id === categoryId) {
      const newId = category.tasks.length;

      return {
        id: category.id,
        name: category.name,
        color: category.color,
        tasks: [
          ...category.tasks,
          { id: newId, name: taskName, completed: false },
        ],
      };
    }

    return category;
  });

  return newCategories;
};

/**
 * Complete task
 * @param {Category[]} originalCategories Original categories
 * @param {number} categoryId Category where task will be completed
 * @param {number} taskId Task id
 * @returns {Category[]} New categories
 */
export const completeTask = (originalCategories, categoryId, taskId) => {
  const newCategories = originalCategories.map((category) => {
    if (category.id === categoryId) {
      return {
        id: category.id,
        name: category.name,
        color: category.color,
        tasks: category.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              id: task.id,
              name: task.name,
              completed: !task.completed,
            };
          }

          return task;
        }),
      };
    }

    return category;
  });

  return newCategories;
};
