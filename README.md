"# rename-bulk" 

### Usage
Clone the repo

```
git clone https://github.com/brunohl91/rename-bulk.git
```

Change settings according to your needs
```
// change to your language to prefix srt files
let srtPrefix = '.por';

// change to your extensions
let extensions = [ '.srt', '.mkv', '.avi', '.mp4' ];
```

Run with arg to your directory or none to current directory
```
node rename.js "C:\Users\Bruno\Desktop\SCRBS-S01-09\Scrubs - 2nd Season"
```

The second argument can be used to specify other regex
```
node rename.js "C:\Users\Bruno\Desktop\SCRBS-S01-09\Scrubs - 2nd Season" /S\d{1,2}E\d{1,3}/g
```