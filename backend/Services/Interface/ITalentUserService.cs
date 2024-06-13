using backend.Models.DTOs;

namespace backend.Services.Interface
{
    public interface ITalentUserService
    {
        Task<TalentUser> GetUserByIdAsync(string userId);
    }

}