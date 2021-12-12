/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { RectShape } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

const AutoSuggest = ({
  loading = false,
  value,
  onChange,
  onBlur = () => {},
  suggestions,
  renderSuggestion,
  onSelectItem = () => {},
  handleQuerySearch = () => {},
  placeholder,
  whichElementOpenOnEnter = 0,
  renderCustomElements = () => null,
}: any) => {
  const [enableSuggestion, setEnableSuggestion] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(whichElementOpenOnEnter);
  const containerRef: any = useRef();
  const inputRef: any = useRef();

  const onKeyDown = (e: any) => {
    // enter key
    if (e.keyCode === 13) {
      if (suggestions.length !== whichElementOpenOnEnter) {
        onSelectItem(suggestions[activeSuggestion]);
        setActiveSuggestion(activeSuggestion);
        setEnableSuggestion(false);
        if (inputRef.current) {
          inputRef.current.blur();
        }
      } else {
        handleQuerySearch();
      }
    }
    //  up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        setActiveSuggestion(suggestions.length - 1);
      } else {
        setActiveSuggestion(activeSuggestion - 1);
      }
    }
    //  down arrow
    else if (e.keyCode === 40) {
      if (suggestions.length === activeSuggestion) {
        setActiveSuggestion(0);
      } else {
        setActiveSuggestion(activeSuggestion + 1);
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setEnableSuggestion(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mr-4 w-full" ref={containerRef}>
      <label
        htmlFor="hero-field"
        className="leading-7  text-blue-500 absolute text-xs -top-3.5 left-5 bg-white"
      >
        Collection Name
      </label>
      <input
        className="w-full bg-white rounded-2xl border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-4 px-3 leading-8 transition-colors duration-200 ease-in-out"
        id={Math.random.toString()}
        name={Math.random.toString()}
        ref={inputRef}
        value={value}
        autoComplete="off"
        placeholder={placeholder}
        onFocus={(event) => {
          setEnableSuggestion(true);
          event.target.select();
        }}
        onBlur={onBlur}
        onChange={(e) => {
          setEnableSuggestion(true);
          onChange(e);
        }}
        onKeyDown={onKeyDown}
      />

      {loading ? (
        <div className="pop-up">
          <ReactPlaceholder ready showLoadingAnimation>
            <div>
              <div>
                <RectShape color="#f0f0f0" style={{ width: '100%', height: '4rem' }} />
              </div>
              <div>
                <RectShape color="#f0f0f0" style={{ width: '100%', height: '4rem' }} />
              </div>
              <div>
                <RectShape color="#f0f0f0" style={{ width: '100%', height: '4rem' }} />
              </div>
              <div>
                <RectShape color="#f0f0f0" style={{ width: '100%', height: '4rem' }} />
              </div>
            </div>
          </ReactPlaceholder>
        </div>
      ) : (
        <>
          {enableSuggestion && (
            <div className="pop-up">
              {renderCustomElements(() => {
                setEnableSuggestion(false);
              })}

              {suggestions?.map((item: any, index: any) =>
                renderSuggestion(item, activeSuggestion === index, () => {
                  setActiveSuggestion(index);
                  onSelectItem(suggestions[index]);
                  setEnableSuggestion(false);
                }),
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AutoSuggest;
