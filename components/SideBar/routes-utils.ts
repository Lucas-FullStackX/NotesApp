export interface Route<T> {
  path: `/${string}`;
  text: string;
  internalPaths: InternalRoutes<T>;
}
type InternalRoutes<T> = {
  [P in keyof T]: Route<T[P]>;
};
export type Routes<T> = {
  [P in keyof T]: Route<T[P]>;
};
/**
 * @param input - Input objets.
 * @returns Keys.
 */
export function getKeys<T>(input: T): (keyof T)[] {
  const keys = Object.keys(input) as (keyof T)[];
  return keys;
}
/**
 * @param parentPath - Path.
 * @param internalPaths - Paths.
 * @returns Paths.
 */
export function mapInternalPaths<T>(
  parentPath: `/${string}`,
  internalPaths: InternalRoutes<T>
): InternalRoutes<T> {
  const mainKeys = getKeys(internalPaths);

  const result = mainKeys.reduce((prev, current) => {
    const route = { ...internalPaths[current] };

    const newPath = (parentPath + route.path) as `/${string}`;

    route.path = newPath;

    route.internalPaths = mapInternalPaths(newPath, route.internalPaths);

    return {
      ...prev,
      [current]: route
    };
  }, internalPaths);

  return result;
}

/**
 * @param routes - Input routes.
 * @returns Output routes.
 */
export function createRoutes<T>(routes: Routes<T>): Routes<T> {
  return mapInternalPaths('' as `/${string}`, routes);
}
export const ROUTES = createRoutes({
  NOTES: {
    text: 'Notas',
    path: '/notes',
    internalPaths: {
      CREATE_NOTE: {
        path: '/create-note',
        text: 'Create Note',
        internalPaths: {}
      },
      JOB_DETAIL: {
        path: '/:id',
        text: 'Nota',
        internalPaths: {}
      }
    }
  },
  PATIENTS: {
    text: 'Pacientes',
    path: '/patients',
    internalPaths: {
      CREATE_PATIENT: {
        path: '/create-note',
        text: 'Create Note',
        internalPaths: {}
      },
      PATIENT_DETAIL: {
        path: '/:id',
        text: 'Nota',
        internalPaths: {}
      }
    }
  }
});
