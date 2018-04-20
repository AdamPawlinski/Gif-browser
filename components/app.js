App = React.createClass({
  render: function() {
    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return (
      <div style={styles}>
          <h1>GIF search<h1>
          <p>Find GIF on <a href="http://giohy.com">giphy</a>. Click to download next GIF.</p>
          <search/>
        <gif/>
      </div>
    );
  }
})
