using Datasakerhet_api;
using Microsoft.EntityFrameworkCore;

namespace inlamning_api
{
    public class SqlContext : DbContext
    {
         protected SqlContext()
        {
        }
        public SqlContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<BlogClassEntity> Blogposts { get; set; }

       
    }
}
