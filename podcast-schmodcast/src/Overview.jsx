import PodcastRow from './PodcastRow';
import './Overview.css';

export default function Overview({
  podcasts,
  setActivePodcast,
  setActiveTitle,
  queryText,
  ratings,
  rate,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Podcast</th>
          <th>Release Date</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(podcasts).map((p) =>
          podcasts[p].channel.item
            .filter((i) =>
              i.title[0].toUpperCase().includes(queryText.toUpperCase())
            )
            .map((e) => (
              <PodcastRow
                selectEpisode={setActivePodcast}
                setActiveTitle={setActiveTitle}
                rate={rate}
                rating={ratings.find((rating) => e.guid == rating.guid)}
                episode={e}
                key={e.mid}
                podcast={{
                  title: podcasts[p].channel.title,
                  image: podcasts[p].channel.image[0],
                }}
              />
            ))
        )}
      </tbody>
    </table>
  );
}
