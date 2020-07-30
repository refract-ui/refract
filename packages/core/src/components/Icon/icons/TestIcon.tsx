import { GenIcon } from 'react-icons';

export const TestIcon = (props: any) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 18 19', version: '1.1' },
    child: [
      { tag: 'title', attr: {}, child: [] },
      { tag: 'desc', attr: {}, child: [] },
      {
        tag: 'g',
        attr: {
          id: '🚀-Bootsketch',
          stroke: 'none',
          strokeWidth: '1',
          fill: 'none',
          fillRule: 'evenodd'
        },
        child: [
          {
            tag: 'g',
            attr: {
              id: 'Svg-Icons',
              transform: 'translate(-107.000000, -682.000000)',
              stroke: '#656774',
              strokeWidth: '2'
            },
            child: [
              {
                tag: 'g',
                attr: {
                  id: 'svg-ics/mob/calendar',
                  transform: 'translate(106.000000, 682.000000)'
                },
                child: [
                  {
                    tag: 'g',
                    attr: {},
                    child: [
                      {
                        tag: 'rect',
                        attr: {
                          id: 'Rectangle',
                          x: '2',
                          y: '4',
                          width: '16',
                          height: '14',
                          rx: '2'
                        },
                        child: []
                      },
                      {
                        tag: 'path',
                        attr: {
                          d: 'M6.5,7 L6.5,1',
                          id: 'Path',
                          strokeLinecap: 'round'
                        },
                        child: []
                      },
                      {
                        tag: 'path',
                        attr: {
                          d: 'M13.5,7 L13.5,1',
                          id: 'Path-Copy',
                          strokeLinecap: 'round'
                        },
                        child: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  })(props);
