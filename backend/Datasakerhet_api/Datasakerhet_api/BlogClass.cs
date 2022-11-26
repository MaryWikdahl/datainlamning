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
        [Column(TypeName = "nvarchar(4d000)")]
        public string Message { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Date { get; set; }
    }

    public class BlogClassModel
    {
        public BlogClassModel() { }

        public BlogClassModel(int id, string title, string message, string date)
        {
            Id = id;
            Title = title;
            Message = message;
            Date = date;
        }
        private int Id { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        private string Date { get; set; }
    }
    public class BlogClassDTO
    {
        public BlogClassDTO(string title, string message, string date)
        {
            Title = title;
            Message = message;
            Date = date;
        }
        public string Title { get; set; }
        public string Message { get; set; }
        public string Date { get; set; }
    }
}

