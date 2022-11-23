using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Datasakerhet_api
{
    public class BlogClassEntity
    {
        public BlogClassEntity()
        {

        }

        public BlogClassEntity(string title, string message)
        {
            Title = title;
            Message = message;
            Date = GetTodaysDate();
        }


        private static string GetTodaysDate()
        {
            return DateTime.Now.ToString();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Message { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Date { get; set; }
    }


    public class BlogClassModel
    {
        public BlogClassModel() { }

        public BlogClassModel(string title, string message)
        {
            Title = title;
            Message = message;
        }

        public string Title { get; set; }
        public string Message { get; set; }
    }
}

