using Ganss.Xss;
using inlamning_api;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Datasakerhet_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Blog : ControllerBase
    {
        private readonly SqlContext _context;
        public Blog(SqlContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogClassEntity>>> GetAllBlogPosts()
        {
            var items = new List<BlogClassEntity>();

            foreach (var item in await _context.Blogposts.ToListAsync())
                items.Add(new BlogClassEntity(item.Title, item.Message));

            return items;
        }
        [HttpPost]
        public async Task<ActionResult<BlogClassEntity>> PostBlogpostEntity(BlogClassEntity model)
        {
            var sanitizer = new HtmlSanitizer();
            var cleanTitle = sanitizer.Sanitize(model.Title);
            var cleanMessage = sanitizer.Sanitize(model.Message);
            var blogpostEntity = new BlogClassEntity(cleanTitle, cleanMessage);
            _context.Blogposts.Add(blogpostEntity);
            await _context.SaveChangesAsync();



            return CreatedAtAction("PostBlogpostEntity", new { id = blogpostEntity.Id }, new BlogClassModel(blogpostEntity.Title,
                 blogpostEntity.Message));
        }
    }
}
