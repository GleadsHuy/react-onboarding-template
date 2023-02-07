import { Range, getTrackBackground } from 'react-range'
export default function RangeSlider({ values, setValues }) {
  const STEP = 1
  const MIN = 0
  const MAX = 33
  return (
    <div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values)
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '3px',
              display: 'flex',
              width: '100%',
              marginTop: '30px'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '3px',
                width: '100%',
                background: getTrackBackground({
                  values,
                  colors: ['#e7e7e7', '#92c1f9', '#e7e7e7'],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: 'center',
                boxShadow: 'inset 0 1px 1px #f0f0f0'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '15px',
              width: '15px',
              borderRadius: '50%',
              backgroundColor: '#FFF',
              border: '1px solid #ddd'
            }}
          ></div>
        )}
      />
      <div
        className='text-center'
        style={{ marginTop: '10px', marginBottom: '7px' }}
        id='output'
      >
        {values[0]}% - {values[1]}%
      </div>
    </div>
  )
}
